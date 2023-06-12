import React from "react";
import S from './Footer.module.css'
import {AppBar, Toolbar, Typography} from "@mui/material";
import instagramIcon from "../../Images/Footer/instagramIcon.webp";

const Footer = (props) => {
    return (
        <footer className={S.MainFooter}>
            <AppBar position="static" style={{ backgroundColor: "black", height: 70 }}>

                <Toolbar>
                    <Typography>
                        Contact me:
                    </Typography>
                    <a  className={S.link} href="https://www.instagram.com/davi_muler/" style={{ display: "flex", alignItems: "center" }}>
                        <img className={S.socialIcon} src={instagramIcon} alt="Instagram"  />
                        <span className={S.link} >Instagram</span>
                    </a>
                </Toolbar>
            </AppBar>
        </footer>
    );
};

export default Footer;
