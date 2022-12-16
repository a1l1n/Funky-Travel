import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from '../../Components/Card/Card';
import { getCountryId } from "../../Redux/Actions";

export const Country = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryId(id))
  }, [id])

  return (
    <div>
      <Card id={id} />
    </div>
  )
}
