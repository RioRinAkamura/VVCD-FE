import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="contactBlock">
        <div className="titleHolder">
          <h2>LIÊN HỆ HỖ TRỢ</h2>
          <p>Điền thông tin và nội dung thắc mắc để được hỗ trợ, xin cảm ơn!</p>
        </div>
        <Form
          name="contact"
          className="contact-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              {
                type: "number",
                message: "The input is not valid phone number",
              },
              {
                required: true,
                message: "Please input your Phone number",
              },
            ]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
