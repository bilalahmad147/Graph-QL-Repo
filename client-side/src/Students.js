import React from 'react';
import { useQuery, gql } from '@apollo/client';

const STU_INFO = gql`
  query studentsInfo {
    Students {
        id
        name
        email
        age
    }
  }
`;


function Students() {

    const { loading, error, data } = useQuery(STU_INFO);
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error </h2>;

    const { Students } = data;
    return (
        <div>
            <h2>Students List</h2>
            <table Border="2" width="500">
                {
                    Students.map((stu) => {
                        return (
                            <tr>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                <td>{stu.email}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Students;
