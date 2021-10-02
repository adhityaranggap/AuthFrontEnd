import Container from '../components/Container';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout title="Home">
        <Container>
          <h1 className="text-xl font-semibold mb-2">Home</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          tempora, adipisci, praesentium numquam voluptatibus, doloribus iusto
          placeat ad deleniti ut cumque beatae possimus deserunt unde esse
          blanditiis maiores assumenda ipsa.
        </Container>
      </Layout>
    </div>
  );
}
