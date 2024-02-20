import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const isDevelopment = mode !== 'production';
  return {
    plugins: isDevelopment ? [react(), basicSsl()] : [react()],
    resolve: {
      alias: {
        app: resolve(__dirname, 'src', 'app'),
        assets: resolve(__dirname, 'src', 'assets'),
        common: resolve(__dirname, 'src', 'common'),
        features: resolve(__dirname, 'src', 'features'),
        test: resolve(__dirname, 'src', 'test'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            antd: ['antd', '@ant-design/icons'],
            vendors: ['react', 'react-dom', 'react-router-dom', 'ky', 'zustand'],
          },
        },
      },
      sourcemap: isDevelopment,
    },
  }
})
