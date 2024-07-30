import { MigrationInterface, QueryRunner } from 'typeorm';

export class Data1722325898587 implements MigrationInterface {
  name = 'Data1722325898587';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_502f28f00e93f40de5873a2ec11\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`city\` CHANGE \`parentId\` \`parentId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`city\` ADD CONSTRAINT \`FK_502f28f00e93f40de5873a2ec11\` FOREIGN KEY (\`parentId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`city\` DROP FOREIGN KEY \`FK_502f28f00e93f40de5873a2ec11\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`city\` CHANGE \`parentId\` \`parentId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`city\` ADD CONSTRAINT \`FK_502f28f00e93f40de5873a2ec11\` FOREIGN KEY (\`parentId\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
