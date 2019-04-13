import React from 'react'
import { Modal, Form, Input } from 'antd'
const FormItem = Form.Item
const TextArea = Input.TextArea

import { FormComponentProps } from 'antd/lib/form'

interface DialogNodeProps extends FormComponentProps {
  node: TSNode
}


class DialogNode extends React.Component<DialogNodeProps> {

  public render() {
    const { form, node } = this.props
    const { getFieldDecorator } = form
    const { name, desc } = node

    return (
      <Modal>
        <Form>
          <FormItem>
            {getFieldDecorator('', {
              initialValue: name
            })(
              <Input />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('', {
              initialValue: desc
            })(
              <TextArea />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default DialogNode
