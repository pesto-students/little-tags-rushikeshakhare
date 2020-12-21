import React, { Component } from 'react';
import { 
    HeaderType, 
    Menu,
    Login,
    Header,
    Footer,
    ProductCard,
    Pagination,
} from '../../components';
import { throttle } from "../../utilities";
import { categories, userMenuOptions, allProducts } from "../../mockData";
import './ProductList.scss';


export class ProductList extends Component<any, any> {

    state = {
        headerType: HeaderType.BLACK,
        showMenu: false,
        showLogin: false,
    };

    onContainerScroll = (e: any) => {
        console.log(1);
        if (e.target.scrollTop > 50)
          this.setState(() => ({
            headerType: HeaderType.BLACK,
          }));
        else
          this.setState(() => ({
            headerType: HeaderType.WHITE,
          }));
    };

    toggleMenu = () => this.setState(() => ({ showMenu: !this.state.showMenu }));

    onLogoutClick = () => {};

    onMenuItemClick = () => {};

    onLoginClick = () =>
        this.setState(() => ({ showLogin: !this.state.showLogin }));

    onFacebookAccountClick = () => {};

    onGoogleAccountClick = () => {};

    onPageSelected = (page: number) => {
        console.log("======> Page selected", page)
    }

    render(): JSX.Element {
        const { showMenu, showLogin } = this.state;

        return (
            <div
                className="product-list"
                onScroll={(e: React.SyntheticEvent) =>
                    throttle(this.onContainerScroll, 100)(e)
                }
            >
                {showMenu && (
                <Menu
                    categories={categories}
                    userMenuOptions={userMenuOptions}
                    onLogoutClick={this.onLogoutClick}
                    onClose={this.toggleMenu}
                    onMenuItemClick={this.onMenuItemClick}
                />
                )}

                {showLogin && (
                <Login
                    onFacebookAccountClick={this.onFacebookAccountClick}
                    onGoogleAccountClick={this.onGoogleAccountClick}
                    onClose={this.onLoginClick}
                />
                )}

                <Header
                    type={this.state.headerType}
                    onMenuButtonClick={this.toggleMenu}
                    isAuthenticated={false}
                    onLoginClick={this.onLoginClick}
                />

                <div className="product-list-container">
                    <div className="title text-center">
                        All Shirts
                    </div>

                    <div className="list">

                        {
                            allProducts.map((product, index) => (
                                <div key={`${index}-${product.name}`} className="list-item">
                                    <ProductCard image={product.image} name={product.name} price={product.price} />
                                </div>
                            ))
                        }
                        
                    </div>
                </div>

                <div className="pagination-container">
                    <Pagination totalPages={20} onPageSelected={this.onPageSelected} />
                </div>

                <Footer />
            </div>
        )
    }
}
