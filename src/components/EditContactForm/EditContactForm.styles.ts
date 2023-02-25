import { Modal, Form } from "antd";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 5px;
  }
  .ant-modal-header {
    border-radius: 5px;
  }
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-footer {
    border-radius: 5px;
  }
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin:25px
  }
`;