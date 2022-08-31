import React from 'react'
import renderer from 'react-test-renderer'
import { ToastComponent } from '../ToastComponent'

describe('ToastComponent', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
      <ToastComponent />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})