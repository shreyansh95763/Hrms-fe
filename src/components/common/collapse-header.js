import React from "react";
import { Link } from "react-router-dom";
import { setHeaderCollapse } from "../../redux/common/commonSlice";
import { useDispatch, useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CollapseHeader = () => {
  const dispatch = useDispatch();
  const headerCollapse = useSelector((state) => state.headerCollapse);

  const toggleHeaderCollapse = () => {
    dispatch(setHeaderCollapse(!headerCollapse));
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="refresh-tooltip">Refresh</Tooltip>}
      >
        <Link to="#" onClick={refreshPage}>
          <i className="ti ti-refresh-dot" />
        </Link>
      </OverlayTrigger>
      {/* <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="collapse-tooltip">Collapse</Tooltip>}
      >
        <Link to="#" id="collapse-header" onClick={toggleHeaderCollapse}>
          <i className="ti ti-chevrons-up" />
        </Link>
      </OverlayTrigger> */}
    </>
  );
};

export default CollapseHeader;
