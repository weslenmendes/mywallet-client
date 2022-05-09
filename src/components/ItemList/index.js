import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { deleteEntry } from "./../../services/api.js";

const ItemList = (props) => {
  const navigate = useNavigate();

  const handleDelete = (e, id) => {
    e.stopPropagation();
    const confirm = window.confirm("Você quer deletar esse item?");

    if (confirm && props.token) {
      deleteEntry(props.token, id)
        .then((res) => {
          if (res.status === 200) navigate(0);
        })
        .catch((e) => {
          console.log(e.response.data);
        });
    }
  };

  const handleUpdate = (item) => {
    if (item) {
      navigate(`/wallet/update/${item._id}`, { state: { ...item } });
    }
  };

  return (
    <ItemListStyled>
      {props.data.map((item, i) => {
        let { _id, date, amount, description, type } = item;

        return (
          <ItemStyled key={i} onClick={() => handleUpdate(item)}>
            <p className="details">
              <DateStyled>{date}</DateStyled>
              <DescriptionStyled>{description}</DescriptionStyled>
            </p>
            <div>
              <AmountStyled type={type}>
                {amount.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
              </AmountStyled>
              <DeleteButtonStyled onClick={(e) => handleDelete(e, _id)}>
                X
              </DeleteButtonStyled>
            </div>
          </ItemStyled>
        );
      })}
    </ItemListStyled>
  );
};

const ItemListStyled = styled.ul`
  align-self: start;

  display: flex;
  flex-direction: column;
  width: 100%;

  color: #000;
`;

const ItemStyled = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;

  cursor: pointer;

  .details {
    width: 50%;
    text-align: left;

    display: flex;
    align-items: center;
  }
`;

const DateStyled = styled.span`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #c6c6c6;
`;

const DescriptionStyled = styled.span`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;

  display: inline-block;
  width: 64%;
  padding-left: 7px;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
`;

const AmountStyled = styled.span`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  justify-self: end;

  color: ${({ type }) => (type === "in" ? "#03AC00" : "#c70000")};
`;

const DeleteButtonStyled = styled.button`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-left: 7px;
  margin-right: 1px;
  justify-self: end;
  padding: 15px;

  color: #c6c6c6;
  background: transparent;
`;

export { ItemList };
