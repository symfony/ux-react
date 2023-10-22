// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import configShared from '../../../vitest.config.js'

export default mergeConfig(
    configShared,
    defineConfig({
         plugins: [react()],
     })
);