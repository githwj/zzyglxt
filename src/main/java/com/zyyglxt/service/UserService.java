package com.zyyglxt.service;

import com.zyyglxt.dataobject.UserDO;
import com.zyyglxt.dataobject.UserDOKey;

import java.util.List;

/**
 * @Author wanglx
 * @Date 2020/10/28 0028 21:21
 * @Version 1.0
 */

public interface UserService {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Wed Oct 28 16:25:52 CST 2020
     */
    void deleteUserByUsername(UserDO userDO);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Wed Oct 28 16:25:52 CST 2020
     */
    int insert(UserDO record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Wed Oct 28 16:25:52 CST 2020
     */
    void insertUserSelective(UserDO record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Wed Oct 28 16:25:52 CST 2020
     */
    UserDO selectByPrimaryKey(UserDOKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Wed Oct 28 16:25:52 CST 2020
     */
    void updateByPrimaryKeySelective(UserDO userDO);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Wed Oct 28 16:25:52 CST 2020
     */
    int updateByPrimaryKeyWithBLOBs(UserDO record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbg.generated Wed Oct 28 16:25:52 CST 2020
     */
    int updateByPrimaryKey(UserDO record);

    /**
     * 查询所有用户
     * @return List<UserDO>
     */
    List<UserDO> selectAllUser();

    /**
     * 根据用户名删除用户
     * @param username
     * @return
     */
    int deleteByUsername(String username);

}
