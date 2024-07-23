import "./CustomButton.css"

const CustomButton = ({ icon, label }) => {
  return (
    <div className="btn-form-custom">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default CustomButton;
