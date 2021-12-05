import React, { useState } from "react";
import { Pagination } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const IskolikPagination = (props) => {
    const [activeItem, setActiveItem] = useState(1);
    const { totalPages = 5, size = "md", withIcons = false, disablePrev = false } = props;

    const onFirstItem = () => {
        handlePaginationChange(1);
    };

    const onPrevItem = () => {
        const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;
        handlePaginationChange(prevActiveItem);
    };

    const onNextItem = (totalPages) => {
        const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;
        handlePaginationChange(nextActiveItem);
    };

    const onLastItem = (totalPages) => {
        handlePaginationChange(totalPages);
    };

    const onItem = (pageNumber) => {
        handlePaginationChange(pageNumber);
    };

    const handlePaginationChange = (pageNumber) => {
        setActiveItem(pageNumber);
        props.handlePaginationChange(pageNumber);
    }

    const items = [];
    for (let number = 1; number <= totalPages; number++) {
        const isItemActive = activeItem === number;

        items.push(
            <Pagination.Item active={isItemActive} key={number} onClick={() => onItem(number)}>
                {number}
            </Pagination.Item >
        );
    };

    return (
        <Pagination size={size} className="mt-3">
            <Pagination.First disabled={disablePrev} onClick={onFirstItem}>
                {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "İlk"}
            </Pagination.First>
            <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>
                {withIcons ? <FontAwesomeIcon icon={faAngleLeft} /> : "Önceki"}
            </Pagination.Prev>
            {items}
            <Pagination.Next onClick={() => onNextItem(totalPages)}>
                {withIcons ? <FontAwesomeIcon icon={faAngleRight} /> : "Sonraki"}
            </Pagination.Next>
            <Pagination.Last onClick={() => onLastItem(totalPages)}>
                {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Sonraki"}
            </Pagination.Last>
        </Pagination>
    );
};

export default IskolikPagination;