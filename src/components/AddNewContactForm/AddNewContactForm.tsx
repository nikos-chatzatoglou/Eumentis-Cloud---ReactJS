import { Form, Modal, Input } from "antd";
import { useState } from "react";

const AddNewContactForm = ({ visible, showAddContactModal, onCancel, contacts }: any) => {
	const [form] = Form.useForm();
	const [idCounter, setIdCounter] = useState(contacts.length + 1);

	return (
		<Modal
			visible={visible}
			title='Create new Contact'
			okText='Create'
			cancelText='Cancel'
			onCancel={onCancel}
			onOk={() => {
				setIdCounter(idCounter + 1);

				form
					.validateFields()
					.then((values) => {
						form.resetFields();
						showAddContactModal(values);
					})
					.catch((info) => {
						console.log("Validate Failed:", info);
					});
			}}
		>
			<Form
				form={form}
				layout='vertical'
				name='New Contact'
				initialValues={{
					modifier: "public",
				}}
			>
				<Form.Item
					label='Username'
					name='username'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Name'
					name='name'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Email'
					name='email'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item label='Phone' name='phone' rules={[{ required: false }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label='Website'
					name='website'
					rules={[{ message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name='username'></Form.Item>
				<Form.Item
					name='modifier'
					className='collection-create-form_last-form-item'
				></Form.Item>
				<Form.Item name='id' initialValue={idCounter}></Form.Item>
				<Form.Item name='favorite' initialValue={false}></Form.Item>
			</Form>
		</Modal>
	);
};

export default AddNewContactForm;