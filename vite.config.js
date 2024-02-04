import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
	  vue(),
	  istanbul({
	      cypress: true,
          include: 'src/*',
          exclude: ['node_modules'],
          extension: [ '.js', '.ts', '.vue' ],	      
	      requireEnv: false,
  	  })
  ],
  server: {
    host: true,
    port: 3000,
  },
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
    }
  }
})
