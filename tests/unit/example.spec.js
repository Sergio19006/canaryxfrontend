import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Explorer from '@/components/Trip/Conditions.vue'

describe('Explorer.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Explorer)
    expect(wrapper.find('.columns'))
  })
})
