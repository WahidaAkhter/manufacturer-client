import React from 'react'
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
  return (
    <tr>
    <th>1</th>
    <td>{email}</td>
    <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
    <td><button class="btn btn-xs">Remove User</button></td>
</tr>
  )
}

export default UserRow