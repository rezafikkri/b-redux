import { connect } from "react-redux";
import Footer from "./Footer"; 
import { setFilter } from "./filtersSlice";

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter))
  };
}

const mapStateToProps = (state) => ({ filter: state.filters.value });

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
