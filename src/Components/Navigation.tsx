import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom';
import AddGameBox from './AddGameBox.jsx';
import SearchBar from './SearchBar.jsx';
import { Navbar as HeroNav, Button as HeroButton, Input, NavbarContent, NavbarItem, Link } from "@heroui/react";


function Navigation({ onSearch }) {
    const location = useLocation();

    const renderButton = (to, label, variant, alwaysInactive = false) => (
        <NavLink to={to}>
            <Button variant={variant} active={!alwaysInactive && location.pathname === to}>
                {label}
            </Button>
        </NavLink>
    );

    return (
        <>
            <Navbar className="gap-2 ps-2 d-flex align-items-center">
                <div className="d-flex gap-2 flex-nowrap">
                    {renderButton("/", "All Games", "light", true)}
                    {renderButton("/ak", "Auburn Kebabs", "outline-primary")}
                    {renderButton("/nje", "NewJeans Elite", "outline-success")}
                    {renderButton("/lt", "LeTeam", "outline-info")}
                </div>

                <div className="ms-auto d-flex gap-2 align-items-center">
                    <SearchBar onSearch={(e) => onSearch(e.target.value)} />
                    <AddGameBox />
                </div>
            </Navbar>
            <HeroNav isBordered>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <HeroButton className="border-purple-500 text-purple-500 border-2 rounded-[30px]" variant='bordered'>
                            LeTeam
                        </HeroButton>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <HeroButton className="bg-sky-300" variant="bordered">
                            Auburn Kebabs
                        </HeroButton>
                    </NavbarItem>
                    <NavbarItem>
                        <HeroButton className="bg-fuchsia-300" variant="bordered">
                            NewJeans Elite
                        </HeroButton>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                    </NavbarItem>
                </NavbarContent>
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    // startContent={<SearchIcon size={18} />}
                    type="search"
                />
            </HeroNav >
        </>

    );
}

export default Navigation;
