package togedog.server.domain.memberreport.entity;

import togedog.server.global.entity.BaseEntity;

import javax.persistence.*;

@Entity
public class MemberReport extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberReportId;

    @Column
    private String content;


}
