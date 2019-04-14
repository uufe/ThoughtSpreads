import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
const FormItem = Form.Item
const TextArea = Input.TextArea

import { FormComponentProps } from 'antd/lib/form'

interface ModalNodeProps extends FormComponentProps {
  visible: boolean
  node: TSNode
  onSave: (node: TSNode) => void
  onCancel: () => void
}


export class ModalNode extends React.Component<ModalNodeProps> {

  private save = () => {
    const { form, onSave } = this.props
    form.validateFieldsAndScroll((err, fieldsValue) => {
      if (err) { return }
      const node = fieldsValue as TSNode
      onSave(node)
    })
  }

  private clearFieldsValue = () => {
    this.props.form.resetFields()
  }

  private modalFooter = (
    <>
      <Button onClick={this.props.onCancel}>取消</Button>
      <Button type="primary" onClick={this.save}>保存</Button>
    </>
  )

  public render() {
    const { form, node, visible, onCancel } = this.props
    const { getFieldDecorator } = form
    const { name, desc } = node

    const title = `${node.id ? '新建' : '编辑'} Node`

    return (
      <Modal
        title={title}
        visible={visible}
        footer={this.modalFooter}
        onCancel={onCancel}
        afterClose={this.clearFieldsValue}
      >
        <Form>
          <FormItem>
            {getFieldDecorator<TSNode>('name', {
              initialValue: name
            })(
              <Input />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator<TSNode>('desc', {
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

export default Form.create<ModalNodeProps>()(ModalNode)
