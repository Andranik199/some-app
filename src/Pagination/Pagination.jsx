import React, { useState, useContext } from 'react';
import { DEFAULT_PAGINATION_PAGE_SIZE } from '../constants';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import cs from 'classnames'
import { TodosContext } from '../App';

import './styles.css'

export const Pagination = ({
    pageSize = DEFAULT_PAGINATION_PAGE_SIZE,
    elemtentsCount,
    onChange,
}) => {
    const context = useContext(TodosContext)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPagesCount = Math.ceil(elemtentsCount / pageSize)
    const pages = Array.from({ length: totalPagesCount }, (_, i) => i + 1)
    const handleChangePage = (e) => {
        const page = Number(e.currentTarget.dataset.page)
        setCurrentPage(page)
        onChange(page)
        if(context.topElementRef?.current) {
            context.topElementRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }
    const handlePrev = () => {
        if(currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1)
        onChange(currentPage - 1)
    }

    const handleNext = () => {
        if(currentPage === totalPagesCount) {
            return
        }
        setCurrentPage(currentPage + 1)
        onChange(currentPage + 1)
    }
    return <div className='pagination-container'>
        <button className='pagination-item' onClick={handlePrev} disabled={currentPage === 1}><LeftOutlined /></button>
        {pages.map(item => (
            <div
                onClick={handleChangePage}
                data-page={item}
                className={cs('pagination-item', { ['isActive']: item === currentPage })}
            >
                {item}
            </div>
        ))}
        <button className='pagination-item' onClick={handleNext} disabled={currentPage === totalPagesCount}><RightOutlined /></button>
    </div>
}