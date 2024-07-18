import React, { useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Form, Input, Modal, Space, message } from 'antd';
import axios from 'axios';
const colors1 = ['#6253E1', '#04BEFE'];
const getHoverColors = (colors) =>
    colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
    colors.map((color) => new TinyColor(color).darken(5).toString());
const style = {

    margin: "20px",
}
const AddButton = () => {
    let random = Math.floor(Math.random() * 100)
    const [isAddStudent, setIsAddStudent] = useState(false)
    const [addStudentData, setAddStudentData] = useState({
        id: random.toString(),
        name: "",
        age: null,
        email: "",
        gender: "",
        gpa: null
    })
    // console.log(addStudentData)

    const handleSubmit = () => {
        message.open({
            type: 'success',
            content: 'Student Added Successfully',
        });
        return (
            axios.post("http://localhost:8000/student", { ...addStudentData })
                .then(response => setAddStudentData(response))
                .catch(err => console.log(err))
        )
    }
    return (
        <>
            < Space >
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                                colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                                colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                                lineWidth: 0,
                            },
                        },
                    }}
                >

                    <Button onClick={() => setIsAddStudent(true)} style={style} type="primary" size="large">
                        Add New Student
                    </Button>
                </ConfigProvider>

            </Space >
            <Modal
                title="Add New Student"
                open={isAddStudent}
                okText="Add"
                onCancel={() => {
                    setIsAddStudent(false)
                }}
                onOk={() => {
                    setIsAddStudent(false)
                    handleSubmit()
                }}
            >
                <Form>
                    <Form.Item label="Name" >
                        <Input onChange={(e) => setAddStudentData((prev) => {
                            return (
                                { ...prev, name: e.target.value }
                            )
                        })} value={addStudentData.name} />
                    </Form.Item>

                    <Form.Item label="Age" >
                        <Input onChange={(e) => setAddStudentData((prev) => {
                            return (
                                { ...prev, age: e.target.value }
                            )
                        })} value={addStudentData.age} />
                    </Form.Item>

                    <Form.Item label="Email" >
                        <Input onChange={(e) => setAddStudentData((prev) => {
                            return (
                                { ...prev, email: e.target.value }
                            )
                        })} value={addStudentData.email} />
                    </Form.Item>

                    <Form.Item label="Gender">
                        <Input onChange={(e) => setAddStudentData((prev) => {
                            return (
                                { ...prev, gender: e.target.value }
                            )
                        })} value={addStudentData.gender} />
                    </Form.Item>

                    <Form.Item label="CGPA">
                        <Input onChange={(e) => setAddStudentData((prev) => {
                            return (
                                { ...prev, gpa: e.target.value }
                            )
                        })} value={addStudentData.gpa} />
                    </Form.Item>
                </Form>

            </Modal>
        </>
    )
};
export default AddButton;