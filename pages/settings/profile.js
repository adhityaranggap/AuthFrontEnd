import React from 'react';
import Layout from '../../components/Layout';
import Container from '../../components/Container';

export default function Profile() {
  return (
    <Layout middleware="auth" title="Update Profile Information">
      <Container>
        <h1 className="font-semibold text-xl mb-2">
          Update Profile Information
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla
        doloremque voluptates doloribus illum expedita architecto. Expedita
        fugiat numquam quae cupiditate, alias quo exercitationem, esse
        provident, libero doloribus modi ipsam!
      </Container>
    </Layout>
  );
}
