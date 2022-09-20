import React from 'react'
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react'
import Layout from './Layout.jsx';

const pages = import.meta.glob('../pages/**/*.jsx')

console.log('creating inertia app');
createInertiaApp({
  resolve: async name => {
    const page = await pages[`../pages/${name}.jsx`]()
    return Object.assign({layout: Layout}, page)
  },
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />)
  },
})
