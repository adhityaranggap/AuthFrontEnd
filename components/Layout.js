import Head from 'next/head';
import NavBar from './Navbar';
import { useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { authCheckState, authUserState } from '../store/auth';
import { useRouter } from 'next/router';

export default function Layout({ title, children, middleware }) {
  const router = useRouter();
  const authUser = useRecoilValueLoadable(authUserState);
  console.log(authUser);
  useEffect(() => {
    if (
      middleware == 'guest' &&
      authUser.state === 'hasValue' &&
      authUser.contents
    ) {
      router.replace('/dashboard');
    }
    if (middleware == 'auth' && authUser.contents == null) {
      router.replace('/login');
    }
  }, [authUser.contents, authUser.state, middleware, router]);
  return (
    <div>
      <Head>
        <title>{title || 'Internet'}</title>
      </Head>
      <NavBar />
      <div className="pt-5 md:pt-10">{children}</div>
    </div>
  );
}
