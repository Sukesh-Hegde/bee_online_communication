import React, { useContext } from 'react'
import classNames from 'classnames'
import { useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcMastercard,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibTwitter,
  cibLinkedin,
  cifUs,
  cifBr,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import UserContext from '../../context/notes/userContext'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]
  const context = useContext(UserContext)

  const { addUser } = context

  const [users, setUsers] = useState([
    {
      avatar: { src: avatar1, status: 'success' },
      user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'USA', flag: cifUs },
      usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2023' },
      country: { name: 'Brazil', flag: cifBr },
      usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'info' },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
  ])

  const [modalVisible, setModalVisible] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [newUser, setNewUser] = useState({
    name: '',
    registered: '',
    country: '',
    usage: '',
    payment: '',
    activity: '',
  })

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  // Open the modal to add a new user
  const handleAddUser = () => {
    const userObject = {
      avatar: { src: avatar2, status: 'success' },
      user: { name: newUser.name, new: true, registered: newUser.registered },
      country: { name: newUser.country, flag: cifUs },
      usage: {
        value: parseInt(newUser.usage, 10),
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      payment: { name: newUser.payment, icon: cibCcMastercard },
      activity: newUser.activity,
    }

    if (editIndex !== null) {
      const updatedUsers = users.map((user, index) => (index === editIndex ? userObject : user))
      setUsers(updatedUsers)
    } else {
      setUsers([...users, userObject])
      addUser(
        users.registered,
        users.name,
        users.country,
        users.usage,
        users.payment,
        users.activity,
      )
    }

    setModalVisible(false)
    setNewUser({ name: '', registered: '', country: '', usage: '', payment: '', activity: '' })
    setEditIndex(null)
  }

  // Open the modal to edit a user
  const handleEditUser = (index) => {
    setEditIndex(index)
    const user = users[index]
    setNewUser({
      name: user.user.name,
      registered: user.user.registered,
      country: user.country.name,
      usage: user.usage.value,
      payment: user.payment.name,
      activity: user.activity,
    })
    setModalVisible(true)
  }

  // Delete a user from the list
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index)
    setUsers(updatedUsers)
  }

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilPeople} />
              </CButton>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <WidgetsBrand className="mb-4" withCharts />
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic & Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-body-secondary text-truncate small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol xs={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-body-secondary text-truncate small">
                          Recurring Clients
                        </div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>
                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-body-secondary small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>
                <CCol xs={12} md={6} xl={6}>
                  <hr className="mt-0" />
                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}
                  <hr className="mt-0" />
                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value} ({item.percent}%)
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>
              <br />

              <CButton color="primary" onClick={() => setModalVisible(true)}>
                Add New User
              </CButton>
              <CModal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <CModalHeader closeButton>
                  {editIndex !== null ? 'Update User' : 'Add New User'}
                </CModalHeader>
                <CModalBody>
                  <CForm>
                    <div className="mb-3">
                      <CFormLabel>Name</CFormLabel>
                      <CFormInput
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel>Registered Date</CFormLabel>
                      <CFormInput
                        type="text"
                        name="registered"
                        value={newUser.registered}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel>Country</CFormLabel>
                      <CFormInput
                        type="text"
                        name="country"
                        value={newUser.country}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel>Usage (%)</CFormLabel>
                      <CFormInput
                        type="number"
                        name="usage"
                        value={newUser.usage}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel>Payment Method</CFormLabel>
                      <CFormInput
                        type="text"
                        name="payment"
                        value={newUser.payment}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel>Activity</CFormLabel>
                      <CFormInput
                        type="text"
                        name="activity"
                        value={newUser.activity}
                        onChange={handleInputChange}
                      />
                    </div>
                  </CForm>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setModalVisible(false)}>
                    Cancel
                  </CButton>
                  <CButton color="primary" onClick={handleAddUser}>
                    {editIndex !== null ? 'Update User' : 'Add User'}
                  </CButton>
                </CModalFooter>
              </CModal>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                    <CTableHeaderCell>Actions</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {users.map((user, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={user.avatar.src} status={user.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{user.user.name}</div>
                        <div className="small text-body-secondary">
                          <span>{user.user.new ? 'New' : 'Returning'}</span> | Registered:{' '}
                          {user.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={user.country.flag} title={user.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{user.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-body-secondary">{user.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={user.usage.color} value={user.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={user.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-body-secondary">Last login</div>
                        <strong>{user.activity}</strong>
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton color="info" size="sm" onClick={() => handleEditUser(index)}>
                          Update
                        </CButton>
                        <CButton
                          color="danger"
                          size="sm"
                          className="ms-2"
                          onClick={() => handleDeleteUser(index)}
                        >
                          Delete
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
