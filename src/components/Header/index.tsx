import cx from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import { ICategory } from '../../facades/gousto/types';
import { getCategories } from '../../store/selectors/components/navigation';
import './styles.css';
import { IHeaderProps } from './types';

function header(props: any): JSX.Element {
  return (
    <header className="header">
      <div className="container fluid">
        <h1 className="title">Gousto | Store Cupboard</h1>
        <nav className="navigation">
          {props.items.map((item: ICategory): JSX.Element => (
            <span
              key={item.id}
              className={cx('line-item', {
              'active': props.activeCategory === item.id
              })}
              onClick={props.updateCategory(item.id)}
            >
              <a href="#">{item.title}</a>
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}


export default compose<IHeaderProps, any>(
  connect(
    (state) => ({
      categories: getCategories(state)
    })
  ),
  mapProps((props: any): IHeaderProps => ({
    activeCategory: props.activeCategory,
    items: props.categories.reduce((result: ICategory[], category: ICategory): ICategory[] => {
      // Only list categories that we want to see.
      if (!category.hidden) {
        result.push(category);
      }
      return result;
    }, []),
    updateCategory: props.updateCategory,
  }))
)(header);
