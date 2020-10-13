import React from "react";
import LabelIcon from "@material-ui/icons/Label";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
function CollegeCard(props) {
  const { college } = props;
  const rated = [1, 2, 3, 4, 5];
  return (
    <div className="card_body">
      <div className="card_body_above">
        <div className="bckimg"></div>
        {college.promoted ? (
          <div className="promoted">
            <span>PROMOTED</span>
          </div>
        ) : null}
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="rating">
          <div>
            <div className="rating_point">
              <p>{college.rating}</p>
              <div style={{ marginTop: 4 }}>/5</div>
            </div>
            <div>{college.rating_remarks}</div>
          </div>
        </div>
        <div className="collegeImage">
          <div className="flex-r">
            <div className="tags">
              <p>{college.tags[0]}</p>
            </div>
            <div className="tags">
              <p>{college.tags[1]}</p>
            </div>
          </div>
          <div className="ranking">
            <p>#7 in 260 colleges in north campus</p>
          </div>
        </div>
      </div>
      <div className="card_body_below">
        <div className="below_right">
          <div className="college_name common_right">
            <p>{college.college_name}</p>
            <p className="starsGiven">
              {rated.map((item) => {
                if (item <= college.rating) {
                  return <StarIcon />;
                } else {
                  return <StarBorderIcon />;
                }
              })}
            </p>
          </div>
          <div className="nearest_place common_right">
            <p>{college.nearest_place[0]} | </p>
            <p> {college.nearest_place[1]}</p>
          </div>
          <div className="famous_palces common_right">
            <div className="percent">93 % Match : </div>
            <p>
              <span className="dark">2.5kms</span> from GTB Nagar ,
            </p>
            <p>
              <span className="dark">7 Kms</span> from Rajiv Chowk
            </p>
          </div>
          <div className="offerText">{college.offertext}</div>
        </div>
        <div className="below_left">
          <div className="originalPrice common_left">
            <span>₹ {college.original_fees} </span>
            <div className="discounttag">
              <LabelIcon />
              <span className="discounttext">{college.discount}</span>
            </div>
          </div>
          <div className="discountedPrice common_left">
            ₹ {college.discounted_fees}
          </div>
          <div className="perSem common_left">{college.fees_cycle}</div>
          <div className="amentaies common_left">
            <p>{college.amenties[0]}</p>
            <p>{college.amenties[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeCard;
