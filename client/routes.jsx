import React from 'react'
import { mount } from 'react-mounter'

import { MainLayout } from './layouts/MainLayout'

import ResolutionsWrapper from './resolutions/ResolutionsWrapper'
import About from './About'

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    })
  }
})

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About />)
    })
  }
})
