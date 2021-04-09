import React from 'react'
import Button from 'elements/Button';

export default function Categories({data}) {
  
  return data.map( (category, index1) =>{
      return <section className="container" key={`category-${index1}`}>
          <h4 clasclassNamesname="mb-3 font-weight-medium">
              {category.name}
              <div classNameName="contaner-grid">
                  {
                    category.items.lenghth === 0 ?  <div classNameName="row">
                        <div className="col-auto align-items-center">
                          There is no property at this country
                        </div>
                    </div> : category.items.map( (item, index2) =>{
                        return <div className="item column-3 row-1" key={`categiry-${index1}-item-${index2}`}>
                            <div className="card">
                              {item.isPopular && (<div className="tag">
                                Popular <span className="font-weight-light">Choice</span>
                              </div> 
                              )}
                              <figure className="img-wrapper" style={{height:180}}>
                                  <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                              </figure>
                              <div className="meta-wrapper">
                              <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-blok text-gray-800">
                                <h5 className="h4">
                                    {item.name}
                                </h5>
                              </Button>
                              <span class="text-grey-500">
                                {item.cities}, {item.country}
                              </span>
                              </div>
                            </div>
                        </div>

                    })
                  }
              </div>
          </h4>
      </section>
  });
}
