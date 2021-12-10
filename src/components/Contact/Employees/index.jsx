import { useState, useEffect } from 'react'
import UserCard from '../../UserCard'
import * as Styled from './styled-components'
import api from '../../../configs/api'

const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch(`${api.host}/employees`)
            .then((res) => res.json())
            .then((data) => setEmployees(data))
    }, [])

    return (
        <Styled.Contact>
            <Styled.Shadow />
            <Styled.Wrapper>
                <Styled.ContactsItem>
                    {employees.map((employee) => (
                        <UserCard employee={employee} />
                    ))}
                </Styled.ContactsItem>
            </Styled.Wrapper>
        </Styled.Contact>
    )
}

export default Employees
