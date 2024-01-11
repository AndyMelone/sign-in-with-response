export default function Response() {
  return (
    <div className="response">
      <img src="/images/icon-success.svg" alt="" />
      <h1>Thanks for subscibing!</h1>
      <p>
        A confirmation email has been sent to
        <strong> ash@loremcompany.com</strong>. Please open it and click the
        button inside to connfirme your subscription
      </p>

      <input type="button" value="Dismiss message" />
    </div>
  );
}
