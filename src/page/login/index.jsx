import React, { useCallback } from 'react'
import { Form, Input, Button, Field, Message, Icon } from 'cloud-react'
import { useNavigate } from "react-router-dom"
import { login } from '@servers/login'
import { loginFooterBtn } from './constants'

import styles from './index.less'

const Login = () => {
  const navigate = useNavigate()
  const field = Field.useField();

  const { init } = field;
  
  const userLogin = useCallback((data) => {
    login(data).then(res => {
      if (res.data.code !== 200) return Message.error(res.data.message)
      window.localStorage.setItem('token', res.data.data.token)
      window.localStorage.setItem('username', data.username)
      navigate('/')
    }).catch(err => {
      Message.error('请求失败请重试')
    })
  }, [])

  const onClick = useCallback(() => {
    field.validate((errs, values) => {
			console.log(errs, values);
      if (errs && !errs.length) return;
      userLogin(values)
		});
  }, [ userLogin ])

  const toLink = useCallback((href) => {
    if (!href) return;
    window.open(href);
  }, [])

  return (<div className={styles.loginBox}>
    <div className={styles.top}>
      <div className={styles.bg}></div>
      <div className={styles.center}>
        <div className={styles.left}>
          <img src="https://devops.shuyun.com/devops/static/img/workbench.2d9a643.jpg" alt="" />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>数云通用平台</h1>
          <div>
            <Form layout="horizontal" labelCol={{ span: 0 }} field={field}>
              <Form.Item required>
                <Input
                  placeholder="请输入用户名"
                  {...init('username', {
                  rules: [{ required: true, message: '用户名不能为空' }, { len: 18 }]})}
                  addonBefore={<Icon type="people"/>}
                />
              </Form.Item>

              <Form.Item required>
                <Input
                  type="password"
                  addonBefore={<Icon type="lock"/>}
                  placeholder="请输入密码" {...init('password', {
                  rules: [{ required: true, message: '密码不能为空' }]
                  })}
                />
              </Form.Item>

              <Form.Item >
                <Button type="primary" style={{ width: '100%' }} onClick={onClick}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footer}>
      <div className={styles.fnBtn}>
        {
          loginFooterBtn.map(res => <span key={res.name} onClick={()=> {
            toLink(res.href)
          }}>{res.name}</span>)
        }
      </div>
      <div className={styles.copyright}>
        copyright@2021 平台事业部
      </div>
    </div>
  </div>)
}

export default Login