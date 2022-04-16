function BorderSpinner({ theme = "dark" }) {
  return (
    <div class={`spinner-border text-${theme} `} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

export default BorderSpinner;
