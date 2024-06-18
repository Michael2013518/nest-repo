import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface CccModuleOptions {
  a: number;
  b: number;
}

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<CccModuleOptions>()
  .setExtras(
    {
      isGlobal: true,
    },
    (definition, extras) => ({
      ...definition,
      global: extras.isGlobal,
    }),
  )
  .build();

// export const {
//   ConfigurableModuleClass,
//   MODULE_OPTIONS_TOKEN,
//   OPTIONS_TYPE,
//   ASYNC_OPTIONS_TYPE,
// } = new ConfigurableModuleBuilder<CccModuleOptions>()
//   .setClassMethodName('register')
//   .setExtras(
//     {
//       isGlobal: true,
//     },
//     (definition, extras) => ({
//       ...definition,
//       global: extras.isGlobal,
//     }),
//   )
//   .build();
