import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "../helpers";

const ControlPesupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        restante: $ {restante}
      </div>
    </Fragment>
  );
};

ControlPesupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPesupuesto;
