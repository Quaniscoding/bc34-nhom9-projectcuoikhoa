import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../../utils/constant";
import { getStringLocal } from "../../utils/config";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import { callLogin } from "../../redux/reducers/users/userLogin";
export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onSubmit = async (values) => {
    try {
      let { email, passWord } = values;
      const result = await dispatch(callLogin({ email, passWord }));
      if (result.isError == true) {
        openNotificationWithIcon();
      }
    } catch (error) {}
  };
  const openNotificationWithIcon = () => {
    notification["error"]({
      message: "Notification !",
      description: "Your email or password is incorrect !",
    });
  };
  return (
    <section className="vh-100 pt-5">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-6 ">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <Form
              initialValues={{ remember: true }}
              onFinish={onSubmit}
              autoComplete="on"
            >
              <span id="dangNhap">Đăng Nhập</span>
              <div>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập ô này!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="passWord"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập ô này!",
                    },
                  ]}
                >
                  <Input type="password" placeholder="Mật khẩu" />
                </Form.Item>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
                <span>
                  Bạn chưa có tài khoản ?{" "}
                  <a
                    onClick={() => {
                      navigate("/user/signup");
                    }}
                    className="fw-bolder text-black"
                  >
                    Đăng ký
                  </a>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>
      </div>
    </section>
  );
}
