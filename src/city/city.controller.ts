import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { City } from './entities/city.entity';
import { ConfigService } from '@nestjs/config';
@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}
  @Inject(ConfigService)
  private configService: ConfigService;

  @InjectEntityManager()
  private manager: EntityManager;

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  async findAll() {
    /*
    const city = new City();
    city.name = '华北';
    await this.manager.save(city);
    const cityChild = new City();
    cityChild.name = '山东';
    const parent = await this.manager.findOne(City, {
      where: {
        name: '华北',
      },
    });
    if (parent) {
      cityChild.parent = parent;
    }
    await this.manager.save(City, cityChild);
    return this.manager.getTreeRepository(City).findTrees();
    */
    /*
    const city = new City();
    city.name = '华南';
    await this.manager.save(city);

    const cityChild1 = new City();
    cityChild1.name = '云南';
    const parent = await this.manager.findOne(City, {
      where: {
        name: '华南',
      },
    });
    if (parent) {
      cityChild1.parent = parent;
    }
    await this.manager.save(City, cityChild1);

    const cityChild2 = new City();
    cityChild2.name = '昆明';

    const parent2 = await this.manager.findOne(City, {
      where: {
        name: '云南',
      },
    });
    if (parent) {
      cityChild2.parent = parent2;
    }
    await this.manager.save(City, cityChild2);
    return this.manager.getTreeRepository(City).findTrees();
    
    /**
     * 一级分类： 根结点
     */
    // return this.manager.getTreeRepository(City).findRoots();
    /**
     * 二级分类
     * findDescendantsTree findAncestorsTree
     * findAncestors findDescendants
     * countAncestors countDescendants
     */
    /*
    const parent = await this.manager.findOne(City, {
      where: {
        name: '云南',
      },
    });
    return this.manager.getTreeRepository(City).countDescendants(parent);
    */
    const city = new City();
    city.name = '华北';
    await this.manager.save(city);

    const cityChild = new City();
    cityChild.name = '山东';
    const parent = await this.manager.findOne(City, {
      where: {
        name: '华北',
      },
    });
    if (parent) {
      cityChild.parent = parent;
    }
    await this.manager.save(City, cityChild);
    console.log(this.configService.get('aaa.bbb.ccc'));
    return this.manager.getTreeRepository(City).findTrees();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
