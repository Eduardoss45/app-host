import { FaWifi, FaCar, FaSwimmingPool, FaMedkit } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { GrRestaurant } from "react-icons/gr";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { TbAirConditioning, TbBeach } from "react-icons/tb";
import { MdHotTub, MdOutdoorGrill, MdFitnessCenter } from "react-icons/md";
import { WiSmoke } from "react-icons/wi";
import { PiFireExtinguisherBold, PiSecurityCameraThin } from "react-icons/pi";

import CustomButton from "./CustomButton";

import "./Step5.css"

const Step5 = () => {
  const resourcesOptions = [
    "Wi-fi",
    "TV",
    "Cozinha",
    "Máquina de lavar",
    "Estacionamento incluído",
    "Ar-condicionado",
    "Piscina",
    "Jacuzzi",
    "Churrasqueira",
    "Academia privativa",
    "Acesso à praia",
  ];

  const resourcesIcons = [
    <FaWifi />,
    <LuMonitor />,
    <GrRestaurant />,
    <CgSmartHomeWashMachine />,
    <FaCar />,
    <TbAirConditioning />,
    <FaSwimmingPool />,
    <MdHotTub />,
    <MdOutdoorGrill />,
    <MdFitnessCenter />,
    <TbBeach />,
  ];

  const securityOptions = [
    "Detector de fumaça",
    "Extintor de incêndio",
    "Kit de primeiros socorros",
    "Câmera externa",
  ];

  const securityIcons = [
    <WiSmoke />,
    <PiFireExtinguisherBold />,
    <FaMedkit />,
    <PiSecurityCameraThin />,
  ];

  return (
    <div id="step-five">
      <h2>Em sua acomodação possui alguma dessas comodidades?</h2>
      <div className="step-five-opt">
        {resourcesOptions.map((resource, index) => (
          <CustomButton
            key={index}
            icon={resourcesIcons[index]}
            label={resource}
          />
        ))}
      </div>
      <h2>Possui algum item de segurança?</h2>
      <div className="step-five-opt">
        {securityOptions.map((security, index) => (
          <CustomButton
            key={index}
            icon={securityIcons[index]}
            label={security}
          />
        ))}
      </div>
    </div>
  );
};

export default Step5;
