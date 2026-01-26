import BasicLayout from './BasicLayout';

function Contact() {
  return (
    <BasicLayout>
      <div className="px-3">
        <h2 className="mt-3 text-2xl">Contact</h2>
        <address>
          <a href="mailto:admin@google.com">admin@google.com</a>
        </address>
      </div>
    </BasicLayout>
  );
}

export default Contact;
