import Form from 'react-bootstrap/Form';

function SearchBar() {
  return (
    <Form className="d-flex flex-column align-items-center">
      <h4 className="text-center mb-4" style={{ paddingTop: '20px' }}>Genuine German Spare Parts</h4>
      <Form.Group className="mb-3" controlId="searchForm.ControlInput1" style={{ width: '300px' }}>
        <Form.Control type="text" placeholder="Search for any automotive product" />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;