import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import dayjs from 'dayjs'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig(({ mode }) => {
  const isElectron = mode === 'electron'
  const isBuild = process.argv.slice(2).includes('build')

  const env = loadEnv(mode, process.cwd())
  // Determine if building the library
  const buildLibrary = env.BUILD_LIBRARY === 'true'

  /*
  if (isElectron)
    rmSync('dist-electron', { recursive: true, force: true }) */

  return {
    plugins: [
      /*   isElectron && electron([
        {
          entry: 'src/main/index.ts',
          vite: {
            build: {
              minify: isBuild,
              outDir: 'dist-electron/main',
            },
          },
        },
      ]),
      isElectron && renderer(),
      isElectron && esmodule(['prettier']), */
      Vue({
        customElement: [
          'iconify-icon',
        ],
        template: {
          compilerOptions: {
            isCustomElement: tag => tag === 'iconify-icon',
          },
        },
      }),
      Pages({
        importMode: 'sync',
      }),
      Components({
        dts: 'src/components.d.ts',
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
        dts: 'src/auto-imports.d.ts',
      }),
      /*
      !isElectron && VitePWA({
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.ts',
        registerType: 'autoUpdate',
        manifest: {
          name: 'Icônes',
          short_name: 'Icônes',
          icons: [
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        integration: {
          configureOptions(viteConfig, options) {
            if (viteConfig.command === 'build')
              options.includeAssets = fg.sync('**!/!*.*', { cwd: join(process.cwd(), 'public'), onlyFiles: true })
          },
        },
        devOptions: {
          enabled: process.env.SW_DEV === 'true',
          /!* when using generateSW the PWA plugin will switch to classic *!/
          type: 'module',
          navigateFallback: 'index.html',
        },
      }),
      */
      UnoCSS({
        mode: 'vue-scoped',
      }),
    ],
    build: {
      lib: {
        entry: resolve(__dirname, './src/index.js'),
        name: 'MyVueLibrary',
        fileName: format => `my-vue-library.${format}.js`,
      },
      rollupOptions: {
        external: ['vue', 'vue-router', '@vueuse/core'],
        output: {
          globals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            '@vueuse/core': 'VueUse',
          },
        },
      },
    },
    define: {
      __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
      PWA: !isElectron && (process.env.NODE_ENV === 'production' || process.env.SW_DEV === 'true'),
    },
    resolve: {
      alias: {
        'iconify-icon': resolve(__dirname, 'node_modules/iconify-icon/dist/iconify-icon.mjs'),
      },
    },
  }
})
