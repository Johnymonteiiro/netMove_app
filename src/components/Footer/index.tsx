import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiSocialFacebook, TiSocialInstagram,
       TiSocialSkype, TiSocialTwitter,
       TiSocialYoutube,TiSocialVimeo
     } from "react-icons/ti";
import * as S from "./style"


export const Footer = ()=> {
    return(
       <S.Footer>
           <S.Container>
               <S.FooterContent>
                   <S.Logo>
                       <h1 className="logo_name">NetMovie</h1>
                   </S.Logo>
                   <S.BasicInfo>
                       <div className="basicInfo_Content">
                           <h1 className="footer-subtitle">Information</h1>
                           <p><Link to="/" className="links" >About Us</Link></p>
                           <p><Link to="/" className="links">Support</Link></p>
                           <p><Link to="/" className="links" >Helps?</Link></p>
                       </div>
                   </S.BasicInfo>
                   <S.Footer_Links>
                   <div className="link_Content">
                      <h1 className="footer-subtitle">More search</h1>
                      <p><Link to="/" className="links">Top Movies</Link></p>
                      <p><Link to="/" className="links">Up Coming Movies</Link></p>
                      <p><Link to="/" className="links">Tv Series</Link></p>
                    </div>
                   </S.Footer_Links>
                   <S.Legal>
                      <div className="legal_Content">
                          <h1 className="footer-subtitle">Legal</h1>
                          <p><Link to="/" className="links">Condition of Use</Link></p>
                          <p><Link to="/" className="links">Privacy Policy</Link></p>
                          <p><Link to="/" className="links">Advertising</Link></p>
                      </div>
                   </S.Legal>
               </S.FooterContent>
               <S.Social_Media>
                   <div className="socil_media">
                       <Link to="/" className="icon_footer"><TiSocialFacebook size={35} className="icon_hover"/></Link>
                       <Link to="/" className="icon_footer"><TiSocialInstagram size={35} className="icon_hover" /></Link>
                       <Link to="/" className="icon_footer"><TiSocialSkype size={35} className="icon_hover" /></Link>
                       <Link to="/" className="icon_footer"><TiSocialTwitter size={35} className="icon_hover" /></Link>
                       <Link to="/" className="icon_footer"><TiSocialYoutube size={35} className="icon_hover"/></Link>
                       <Link to="/" className="icon_footer"><TiSocialVimeo size={35} className="icon_hover" /></Link>
                       
                   </div>
               </S.Social_Media>
               <S.CopyRigth>
                   <div className="copyRigth_Content">
                       <p className="copy_rigth"><AiOutlineCopyrightCircle/>NetMovie 2021</p>
                   </div>
               </S.CopyRigth>
           </S.Container>
       </S.Footer>
    )
}