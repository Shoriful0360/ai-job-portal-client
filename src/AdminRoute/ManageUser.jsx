import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const roles = ['Admin', 'Job Seeker', 'Employer'];

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false);
        }
    };

    const handleRoleChange = async (userId, newRole) => {
        try {
            await axios.patch(`http://localhost:5000/users/${userId}/role`, { role: newRole });
            fetchUsers();
            Swal.fire('Updated!', 'User role has been updated.', 'success');
        } catch (error) {
            console.error("Error updating role:", error);
            Swal.fire('Error!', 'Something went wrong while updating role.', 'error');
        }
    };

    const handleDeleteUser = async (userId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This user will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5000/users/${userId}`);
                    setUsers(users.filter(user => user._id !== userId));
                    Swal.fire('Deleted!', 'User has been deleted.', 'success');
                } catch (error) {
                    console.error("Error deleting user:", error);
                    Swal.fire('Error!', 'Something went wrong while deleting the user.', 'error');
                }
            }
        });
    };

    if (loading) {
        return <div>Loading users...</div>;
    }

    return (
        <div className="p-5">
            <h3 className="text-xl font-bold mb-4">Manage Users</h3>
            
        </div>
    );
};

export default ManageUser;
