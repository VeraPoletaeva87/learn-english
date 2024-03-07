import { Button, Form, Input, InputNumber } from 'antd';

type FieldType = {
  word?: string;
  options?: string;
  answer?: number;
  meaning?: string;
  example?: string;
  synonyms?: string;
};

const AdminPage = (): JSX.Element => {
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = async (data: any) => {
    const url = 'http://localhost:3000/api/words';
    const formData = {
      word: data.word ?? '',
      options: data.options?.split(',') ?? '',
      answer: data.answer ?? 0,
      meaning: data.meaning ?? '',
      example: data.example ?? '',
      synonyms: data.synonyms?.split(',') ?? '',
    };
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className='flex'>
      <div>Add new word</div>
      <Form
        autoComplete='off'
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 600 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item<FieldType> label='Word' name='word' rules={[{ required: true, message: 'Please input word!' }]}>
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Options'
          name='options'
          rules={[{ required: true, message: 'Please input translation options!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Answer'
          name='answer'
          rules={[{ required: true, message: 'Please input correct answer index!' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item<FieldType>
          label='Meaning'
          name='meaning'
          rules={[{ required: true, message: 'Please input meaning!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Example'
          name='example'
          rules={[{ required: true, message: 'Please input example!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Synonyms'
          name='synonyms'
          rules={[{ required: true, message: 'Please input synonyms!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType='submit' type='primary'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminPage;
