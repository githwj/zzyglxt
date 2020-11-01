package com.zyyglxt.dao;

import com.zyyglxt.dataobject.CulturalResourcesDO;
import com.zyyglxt.dataobject.CulturalResourcesDOKey;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CulturalResourcesDOMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_culpro_cultural_resources
     *
     * @mbg.generated Fri Oct 30 16:11:19 CST 2020
     */
    int deleteByPrimaryKey(CulturalResourcesDOKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_culpro_cultural_resources
     *
     * @mbg.generated Fri Oct 30 16:11:19 CST 2020
     */
    int insert(CulturalResourcesDO record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_culpro_cultural_resources
     *
     * @mbg.generated Fri Oct 30 16:11:19 CST 2020
     */
    int insertSelective(CulturalResourcesDO record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_culpro_cultural_resources
     *
     * @mbg.generated Fri Oct 30 16:11:19 CST 2020
     */
    CulturalResourcesDO selectByPrimaryKey(@Param("key")CulturalResourcesDOKey key, @Param("chineseCulturalType") String chineseCulturalType);

    List<CulturalResourcesDO> selectCulturalResourcesList(String chineseCulturalType);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_culpro_cultural_resources
     *
     * @mbg.generated Fri Oct 30 16:11:19 CST 2020
     */
    int updateByPrimaryKeySelective(CulturalResourcesDO record);

    int changeStatusByPrimaryKeySelective(@Param("key") CulturalResourcesDOKey key, @Param("status") String chineseCulturalStatus);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_culpro_cultural_resources
     *
     * @mbg.generated Fri Oct 30 16:11:19 CST 2020
     */
    int updateByPrimaryKeyWithBLOBs(CulturalResourcesDO record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table tb_culpro_cultural_resources
     *
     * @mbg.generated Fri Oct 30 16:11:19 CST 2020
     */
    int updateByPrimaryKey(CulturalResourcesDO record);
}