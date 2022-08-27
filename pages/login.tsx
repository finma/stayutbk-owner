import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Alert, Button, Divider, Form, Input, Space } from "antd";
import classNames from "classnames";
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Login.module.scss";

const Login: NextPage = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isError, setError] = useState(false);
  const [unregisteredEmail, setUnregisteredEmail] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const [form] = Form.useForm();

  const onFinishFailed = (err: any) => {
    console.log("Failed:", err);
  };

  const clearError = () => {
    if (isError) {
      setError(false);
    }
    if (unregisteredEmail) {
      setUnregisteredEmail(false);
    }
  };

  const isDisable = () => {
    if (
      !form.getFieldValue("email") ||
      !form.getFieldValue("password") ||
      form.getFieldError("email").length
    ) {
      return true;
    }
    return false;
  };

  const handleLogin = async () => {
    console.log("login", form.getFieldsValue());
  };

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1>StayUTBK</h1>
            <Divider style={{ margin: "32px 0" }} />

            <div>
              <h1 className={styles.h3}>Login to your account</h1>
              <Form
                form={form}
                name="login"
                autoComplete="off"
                onFinish={handleLogin}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                scrollToFirstError
              >
                <Space direction="vertical" size={16}>
                  <Space direction="vertical" size={16}>
                    <Form.Item
                      style={{ marginBottom: "0" }}
                      name="email"
                      label="Email Address"
                      htmlFor="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          max: 100,
                          message: "Email max 100 characters!",
                        },
                        {
                          validator: (_, val) => {
                            clearError();
                            if (unregisteredEmail) {
                              return Promise.reject(
                                new Error("Email is not registered!")
                              );
                            } else {
                              return Promise.resolve();
                            }
                          },
                        },
                      ]}
                    >
                      <Input
                        // className={styles.input}
                        name="email"
                        placeholder="Email Address"
                        readOnly={isSubmitting}
                      />
                    </Form.Item>

                    <Form.Item
                      style={{ marginBottom: "0" }}
                      name="password"
                      htmlFor="password"
                      label="Password"
                      rules={[
                        {
                          validator: (_, val) => {
                            clearError();
                            if (isError) {
                              return Promise.reject(
                                new Error("Password is not correct!")
                              );
                            } else {
                              return Promise.resolve();
                            }
                          },
                        },
                      ]}
                    >
                      <Input.Password
                        className={styles.input}
                        iconRender={(visible) =>
                          visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                        }
                        name="password"
                        placeholder="Password"
                        readOnly={isSubmitting}
                      />
                    </Form.Item>
                  </Space>
                  <Form.Item style={{ marginBottom: "0" }} shouldUpdate>
                    {() => {
                      return (
                        <Button
                          block
                          disabled={isDisable()}
                          htmlType="submit"
                          loading={isSubmitting}
                          className={classNames("button", "success")}
                        >
                          Login
                        </Button>
                      );
                    }}
                  </Form.Item>
                </Space>
              </Form>
            </div>
            {/* <Button onClick={handleLogout} block className={classNames(components.button, components['success'])}>logout</Button> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
