import React, { useEffect, useRef, useState } from 'react';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Affix, Button, Form, Input, Modal, Space, Table, message } from 'antd';
import Highlighter from 'react-highlight-words';
import AddButton from './AddButton';
import axios from 'axios';



const StudentsTable = () => {
    const [studentData, setStudentData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editStudentData, setEditStudentData] = useState('');
    const searchInput = useRef(null);


    useEffect(async () => {
        let data = await axios.get("http://localhost:8000/student")
        return setStudentData(data.data)
    }, [])



    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button type="link" size="small" onClick={() => close()}>
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const editStudent = (record) => {
        setIsEditing(true)
        setEditStudentData({ ...record })

    }

    // console.log(editStudentData)

    const deleteStudent = (record) => {
        Modal.confirm({
            title: "Are you sure, you want to delete this Student?",
            onOk: () => {
                axios.delete("http://localhost:8000/student/" + record.id)
                    .then(res => console.log(res))
                setStudentData((prev) => {
                    return prev.filter(student => student.id !== record.id)
                })
                message.open({
                    type: 'success',
                    content: 'Deteled Successfully',
                });
            }
        })

    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            ...getColumnSearchProps('id'),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            ...getColumnSearchProps('gender'),
        },
        {
            title: 'CGPA',
            dataIndex: 'gpa',
            key: 'gpa',
            ...getColumnSearchProps('gpa'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => editStudent(record)} style={{ color: "green", marginRight: "12px", cursor: "pointer" }} />
                        <DeleteOutlined onClick={() => deleteStudent(record)} style={{ color: "red", cursor: "pointer" }} />
                    </>
                )
            }
        },
    ];
    // console.log(Object.keys)

    // const updateStudentData = async () => {
    //     let id = editStudentData.id
    //     await axios.put("http://localhost:8000/student" + id, editStudentData)
    //         .then(response => {
    //             setStudentData({...studentData,response})
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         });
    // }


    const resetEditing = () => {
        setIsEditing(false)
        setEditStudentData("")
    }
    const [top, setTop] = React.useState(10);

    return (
        <>

            <Affix offsetTop={top}>
                <AddButton onClick={() => setTop(top + 10)} />
            </Affix>

            <Table columns={columns} dataSource={studentData} />
            <Modal
                title="Edit Student Details"
                open={isEditing}
                okText="Save"
                onCancel={() => {
                    resetEditing()
                }}
                onOk={() => {
                    // updateStudentData()
                    setStudentData(pre => {
                        return pre.map(student => {
                            if (student.id === editStudentData.id) {
                                message.open({
                                    type: 'success',
                                    content: 'Edited Student details Successfully',
                                });
                                return (
                                    axios.put("http://localhost:8000/student/" + editStudentData.id, { ...editStudentData })
                                )

                            }
                            else {
                                return student
                            }
                        })
                    })
                    resetEditing()
                }}
            >
                <Form>
                    <Form.Item label="Name" >
                        <Input onChange={(e) => setEditStudentData((prev) => {
                            return (
                                { ...prev, name: e.target.value }
                            )
                        })} value={editStudentData.name} />
                    </Form.Item>

                    <Form.Item label="Age" >
                        <Input onChange={(e) => setEditStudentData((prev) => {
                            return (
                                { ...prev, age: e.target.value }
                            )
                        })} value={editStudentData.age} />
                    </Form.Item>

                    <Form.Item label="Email" >
                        <Input onChange={(e) => setEditStudentData((prev) => {
                            return (
                                { ...prev, email: e.target.value }
                            )
                        })} value={editStudentData.email} />
                    </Form.Item>

                    <Form.Item label="Gender">
                        <Input onChange={(e) => setEditStudentData((prev) => {
                            return (
                                { ...prev, gender: e.target.value }
                            )
                        })} value={editStudentData.gender} />
                    </Form.Item>

                    <Form.Item label="CGPA">
                        <Input onChange={(e) => setEditStudentData((prev) => {
                            return (
                                { ...prev, gpa: e.target.value }
                            )
                        })} value={editStudentData.gpa} />
                    </Form.Item>
                </Form>

            </Modal>
        </>
    );
};

export default StudentsTable;
