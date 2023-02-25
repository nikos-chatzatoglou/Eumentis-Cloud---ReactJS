import { Form, Input } from "antd";

import { StyledModal, StyledForm } from "./EditContactForm.styles";

const EditContactForm = ({
	isEditContactFormVisible,
	handleCancel,
	updateContact,
	contact,
	hideModal,
}: any) => {
	const [form] = Form.useForm();

	return (
		<StyledModal
			title='Edit Contact'
			visible={isEditContactFormVisible}
			onCancel={handleCancel}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						form.setFieldsValue(values);
						updateContact(contact.id, values);
					})
					.catch((info) => {
						console.log("Validate Failed:", info);
					});
				hideModal();
			}}
		>
			<StyledForm form={form} layout='vertical'>
				<Form.Item
					initialValue={contact.name}
					label='Name'
					name='name'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					initialValue={contact.email}
					label='Email'
					name='email'
					rules={[{ required: true, message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					initialValue={contact.phone}
					label='Phone'
					name='phone'
					rules={[{ required: false }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					initialValue={contact.website}
					label='Website'
					name='website'
					rules={[{ message: "This field is required!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item initialValue={contact.username} name='username'></Form.Item>
			</StyledForm>
		</StyledModal>
	);
};

export default EditContactForm;
