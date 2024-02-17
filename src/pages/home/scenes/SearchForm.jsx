import React from 'react'
import PropTypes from 'prop-types'
import {BiSearch} from 'react-icons/bi'


const SearchForm = props => {
  return (
    <form
        className='form text-center my-3 p-2 border border-3 border-light rounded-pill mx-auto shadow'
        style={{ width: 'fit-content' }}
      >
        <select
          name="category"
          id="categories"
          className='form-group border-0 m-2 m-md-0'
          style={{ minWidth: '130px', width: '15vw' }}
        >
          <option value="all" className="all" defaultChecked>All Categories</option>
          <option value="1" className="1">1</option>
          <option value="2" className="2">2</option>
          <option value="3" className="3">3</option>
          <option value="4" className="4">4</option>
          <option value="5" className="5">5</option>
          <option value="6" className="6">6</option>
          <option value="7" className="7">7</option>
          <option value="8" className="8">8</option>
          <option value="9" className="9">9</option>
          <option value="10" className="10">10</option>
          <option value="11" className="11">11</option>
          <option value="12" className="12">12</option>
        </select>
        <input
          type="search"
          name="product"
          id="product"
          className="form-group border-0 py-2 m-2 m-md-1 d-block d-sm-inline text-center"
          placeholder='Search your product'
          style={{ minWidth: '200px', width: '30vw' }}
        />
        <button type='submit' className='btn border-0 mt-2'>
          <BiSearch className='form-group h4' />
        </button>
      </form>
  )
}

SearchForm.propTypes = {}

export default SearchForm